export default function postReducer(
  state = [
    {
      author: "Eslam",
      body: "lorem lorem lorem lorem loremlorem lorem loremlorem",
      title: "Any Title",
    },
  ],
  action
) {
  switch (action.type) {
    case "addPost":
      return [...state, action.payload];
    default:
      return state;
  }
}
