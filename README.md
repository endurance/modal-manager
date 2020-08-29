# React Modal Manager

A simple programmatic interface for rendering your modal components.

## Why?

It's really easy and convenient to render a modal component outside of your view. 

i.e. in response to an event or user action, rather than having to do boolean variable gymnastics in your view.

## How do I use it?

First, Declare the `ModalContainer` at the root of your application

```typescript jsx
const App = () => {
  <div>
    <Router>
      stuff
    </Router>
    <ModalContainer />
  </div>
}
```

Next, whenever you want to programmatically render a modal, use the `renderModal` function, and pass your component.
```typescript jsx
    renderModal(props => {
      return (
        <Dialog {...props}>
          <DialogContent>Rendered Modal</DialogContent>
        </Dialog>
      );
    });
```

Simple as that.


# License
MIT

# Author
Endurance Idehen
