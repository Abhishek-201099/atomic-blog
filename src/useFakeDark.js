import {useState,useEffect} from 'react';

export default function useFakeDark(initialState){
  const [isFakeDark, setIsFakeDark] = useState(initialState);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return [isFakeDark,setIsFakeDark];
}