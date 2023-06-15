import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);

  const updateNewsData = (data) => {
    setNewsData(data);
  };

  return (
    <NewsContext.Provider value={{ newsData, setNewsData: updateNewsData }}>
      {children}
    </NewsContext.Provider>
  );
};
