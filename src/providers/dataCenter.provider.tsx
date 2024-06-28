/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { starWarsService } from '@services';
import { Category, Person } from '@types';

// Define the type for the context state
interface DataCenterContextType {
  categories: Category[];
  fetchCategoryItems: (category: string, search?: string | undefined) => Promise<void>;
  categoryItems: any[],
  fetchPeople: () => Promise<void>;
  allPeople: any[];
  addPerson: (person: Person) => void;
}

const DataCenterContext = createContext<DataCenterContextType | undefined>(undefined);

export const useDataCenter = () => {
  const context = useContext(DataCenterContext);
  if (!context) {
    throw new Error('useDataCenterContext must be used within a DataProvider');
  }
  return context;
};

interface DataCenterProviderProps {
  children: ReactNode;
}

// Create the provider component
export const DataCenterProvider: React.FC<DataCenterProviderProps> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryItems, setCategoryItems] = useState<{ name: string; results: any[] }[]>([]);
  
  const [allPeople, setAllPeople] = useState<any[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategoryItems = async (search?: string) => {
    const calls = categories.map((category) => starWarsService.getItemsByCategory(category.name, search));
    const responses = await Promise.all(calls);
    const results = responses.map((response) => response.json());
    const data = await Promise.all(results);
    setCategoryItems(data.map((res, idx) => ({ name: categories[idx].name, results: res.results})));
  };

  const fetchPeople = async () => {
    const response = await starWarsService.getItemsByCategory('people');
    const results = await response.json();
    setAllPeople(results.results);
  };

  const fetchCategories = async () => {
    const response = await starWarsService.getCategorys();
    const results: Record<string, string> = await response.json()
    const data = Object.entries(results).map(([category, url]): Category => ({ name: category, url }));
    setCategories(data);
  };

  const addPerson = (person: Person) => {
    if (!allPeople.find((p) => p.name === person.name)) {
      setAllPeople((prevPeople) => [...prevPeople, person]);
  }

  }

  return (
    <DataCenterContext.Provider value={{ categories, fetchCategoryItems, categoryItems, fetchPeople, allPeople, addPerson }}>
      {children}
    </DataCenterContext.Provider>
  );
};
