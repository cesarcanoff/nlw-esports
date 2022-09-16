```js
const [hasUserClickedOnButton, setHasUserClickedOnButton] = useState(false);

function handleButtonClick() {
  setHasUserClickedOnButton(true);
}

<button onClick={handleButtonClick}>Clique aqui</button>;

{
  hasUserClickedOnButton ? <p>Texto Aqui</p> : null;
}
```
