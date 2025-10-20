import React from 'react';
import { ScrollView } from 'react-native';
import AboutMe from './src/components/custom/AboutMe';
import TeacherMessage from './src/components/custom/TeacherMessage';
import TasbihList from './src/components/custom/TasbihList';
import SearchAndAdd from './src/components/custom/SearchAndAdd';

export default function App() {
  return (
    <ScrollView>
      <AboutMe />
      <TeacherMessage />
      <TasbihList />
      <SearchAndAdd />
    </ScrollView>
  );
}
