export declare const useDataFetch: <T>(initialData: T | null, mockDataSource: T) => {
    data: T | null;
    loading: boolean;
    error: string | null;
    fetchData: () => Promise<void>;
};
