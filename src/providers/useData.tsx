import React, {
  createContext,
  useState,
  type ReactNode,
  useEffect,
  useContext,
} from "react";

export type imagesType = {
  filename: string;
  url: string;
};
export type dataType = {
  shirts: imagesType[];
  suit: imagesType[];
  tshirts: imagesType[];
};
export type dataContextType = {
  data: dataType | null;
  setData: React.Dispatch<React.SetStateAction<dataType | null>>;
};
type DataProviderType = {
  children: ReactNode;
};
const DataContext = createContext<dataContextType | undefined>(undefined);
const DataProvider = ({ children }: DataProviderType) => {
  const [data, setData] = useState<dataType | null>(null);
  useEffect(() => {
    fetch("http://localhost:5000/images")
      .then((resp) => resp.json())
      .then((res) => setData(res));
  }, []);
  console.log(data);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within DataProvide");
  }
  return context;
};
export { DataProvider, useData };
