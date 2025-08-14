import React from 'react';
export interface Step {
    label: string;
    summary?: string;
}
export interface StepperProps {
    /** An array of step objects to display. */
    steps: Step[];
    /** The index of the currently active step (0-based). */
    currentStep: number;
    /** Optional additional CSS classes for the container. */
    className?: string;
}
/**
 * A component that displays progress through a sequence of steps.
 * It's ideal for multi-step forms, wizards, or onboarding flows.
 */
/**
 * @wizard
 * @name Stepper
 * @description Guides users through a sequence of discrete steps, ideal for multi-step forms or onboarding flows.
 * @tags navigation, progress, wizard, ui
 * @props
 * - name: steps
 * type: { label: string; summary?: string; }[]
 * description: An array of step objects, each with a `label` and optional `summary`.
 * - name: currentStep
 * type: number
 * description: The 0-based index of the currently active step.
 * - name: className
 * type: string
 * description: Optional additional CSS classes for the stepper container.
 * @category navigation
 */
export declare const Stepper: React.FC<StepperProps>;
