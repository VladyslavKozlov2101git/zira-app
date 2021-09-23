const [itemsAmount, setItemsAmount] = setState(0);
const [items, setItems] = setState([]);

function addItem(itemData) {
  const newItem = {
    ...itemData,
    status: 'pending',
  }
  setItems([...items, newItem]);
  setItemsAmount(itemsAmount + 1);
};

useEffect(async () => {
  try {
    // Execute the API call
    const response = await axios.get('http://api.zira.givenfly.space/api/projects/', {
      headers: { Authorization: `Token ${localStorage.token}` },
    })
    if (resposne && response.data) {
      // Add the successfully updated version of the item
      newItem.status = 'done';
      newItems.data = response.data;
      setItems([...items, newItem]);
    }
  } catch (err) {
    // If the API call fails, add the "failed" version of the item
    newItem.status = 'failed';
    setItems([...items, newItem]);
  }
}, [itemsAmount])







  ;