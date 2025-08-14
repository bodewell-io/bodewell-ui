// src/components/templates-patterns/FormTemplate.tsx
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../form/Input';
import { Select } from '../form/Select';
import { Checkbox } from '../form/Checkbox';
import { Radio } from '../form/Radio';
import { Card } from '../layout/Card';
import { SectionHeader } from './SectionHeader';
import { ActionBar } from '../templates-patterns/ActionBar';

// Define common props for a form field
interface FormFieldBase {
  name: string;
  label: string;
  className?: string;
  disabled?: boolean;
}

// Input Field
interface FormInput extends FormFieldBase {
  type: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string | number;
}

// Select Field
interface SelectOption {
  value: string | number;
  label: string;
}

interface FormSelect extends FormFieldBase {
  type: 'select';
  options: SelectOption[];
  value?: string | number;
}

// Checkbox Field
interface FormCheckbox extends FormFieldBase {
  type: 'checkbox';
  checked?: boolean;
}

// Radio Field (part of a group, 'name' is crucial)
interface FormRadio extends FormFieldBase {
  type: 'radio';
  value: string | number;
  checked?: boolean;
  radioGroup: string; // Explicit identifier for the radio group
}

export type FormField = FormInput | FormSelect | FormCheckbox | FormRadio;

export interface FormTemplateProps {
  title: string;
  fields: FormField[];
  onSubmit: (formData: Record<string, any>) => void;
  onCancel?: () => void;
  submitButtonText?: string;
  cancelButtonText?: string;
  className?: string;
}

/**
 * @wizard
 * @name FormTemplate
 * @description A flexible component for rapidly building forms based on a declarative array of field configurations.
 * @tags templates, form, structure, pattern
 * @props
 * - name: title
 * type: string
 * description: The main title displayed at the top of the form.
 * - name: fields
 * type: FormField[]
 * description: An array of objects, where each object defines a form input, select, checkbox, or radio field.
 * - name: onSubmit
 * type: (formData: Record<string, any>) => void
 * description: Callback function triggered when the form is submitted, providing the current form data.
 * - name: onCancel
 * type: () => void
 * description: Optional callback function triggered when the 'Cancel' button is clicked.
 * - name: submitButtonText
 * type: string
 * description: The text displayed on the primary submit button.
 * default: 'Submit'
 * - name: cancelButtonText
 * type: string
 * description: The text displayed on the cancel button.
 * default: 'Cancel'
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the outer form container.
 * @category templates-patterns
 */
export const FormTemplate: React.FC<FormTemplateProps> = ({
  title,
  fields,
  onSubmit,
  onCancel,
  submitButtonText = 'Submit',
  cancelButtonText = 'Cancel',
  className,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>(() => {
    const initialState: Record<string, any> = {};
    fields.forEach(field => {
      if (field.type === 'checkbox') {
        initialState[field.name] = (field as FormCheckbox).checked || false;
      } else if (field.type === 'radio') {
        if ((field as FormRadio).checked) {
          initialState[(field as FormRadio).radioGroup] = field.value;
        }
      } else {
        initialState[field.name] = (field as FormInput | FormSelect).value || '';
      }
    });
    return initialState;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderField = (field: FormField) => {
    const commonProps = { id: field.name, label: field.label, className: field.className, disabled: field.disabled };
    switch (field.type) {
      case 'text': case 'email': case 'password': case 'number':
        return <Input {...commonProps} name={field.name} type={field.type} placeholder={(field as FormInput).placeholder} value={formData[field.name]} onChange={handleChange} />;
      case 'select':
        return <Select {...commonProps} name={field.name} options={(field as FormSelect).options} value={formData[field.name]} onChange={handleChange} />;
      case 'checkbox':
        return <Checkbox {...commonProps} name={field.name} checked={formData[field.name]} onChange={handleChange} />;
      case 'radio':
        return <Radio {...commonProps} name={(field as FormRadio).radioGroup} value={field.value} checked={formData[(field as FormRadio).radioGroup] === field.value} onChange={handleChange} />;
      default: return null;
    }
  };

  return (
    <Card className={className} padding="p-0">
      <form onSubmit={handleSubmit}>
        <div className="p-6">
          <SectionHeader title={title} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {fields.map((field) => (
              <div key={field.name + (field.type === 'radio' ? (field as FormRadio).value : '')}>{renderField(field)}</div>
            ))}
          </div>
        </div>
        <ActionBar>
          {onCancel && <Button type="button" variant="outline" onClick={onCancel}>{cancelButtonText}</Button>}
          <Button type="submit" variant="primary">{submitButtonText}</Button>
        </ActionBar>
      </form>
    </Card>
  );
};