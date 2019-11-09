- [ ] Why would you use class component over function components (removing hooks from the question)?

The main reason would be that an existing code base uses them and you will need to stay consistent with it.  I also think that I can follow the path the information flows in much better than with hooks.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount() - this is a method that runs when a component mounts.
componentWillUnmount() - this is a method that will run when a component is being removed from the DOM.
componentDidUpdate() - this method is run anytime there is an update, be careful with this one and making sure your props are being taken care of.

- [ ] What is the purpose of a custom hook?

They allow you to pass stateful logic between components and are reuseable.

- [ ] Why is it important to test our apps?

This seems like a silly question. Making sure every component and part of your component is working properly, while writing the code, will mean less work for you doown the road.