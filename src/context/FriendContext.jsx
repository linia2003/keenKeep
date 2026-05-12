import { createContext, useState, useEffect } from 'react';

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  fetches JSON data
    fetch('/friends.json')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load JSON");
        return res.json();
      })
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const addInteraction = (entry) => {
    setTimeline((prev) => [entry, ...prev]);
  };

  return (
    <FriendContext.Provider value={{ friends, timeline, loading, addInteraction }}>
      {children}
    </FriendContext.Provider>
  );
};