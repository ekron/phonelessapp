# Phoneless Web App

This is the web front end for the "Phoneless" app that sends SMS messages via a web app.

It relies on the [api](https://github.com/emlynoregan/phonelessapi) part of the project for its back-end.

## Get Started

```bash
yarn install
yarn start
```

(All the usual create-react-app stuff.)

## TODO

 - [x] Scaffold basic UI
  - [x] cra init
  - [x] remove some cra kruft
  - [x] contact sidemenu with animation
  - [x] message list that scrolls to bottom
  - [x] config screens as modals
 - [ ] Mock up API
  - [ ] mock GraphQL back-end 
  - [ ] create TS types (or generate them)
  - [ ] add related props to components
 - [ ] Set up routes
   - [ ] `/contact/:id/messages/(:messageId)`
   - [ ] `/contact/:id/edit`
   - [ ] `/chooseyourphonenumber`
   - [ ] `/chooseyourphonenumber/:phonenumber/edit`
   - [ ] `/settings `
   - [ ] (default to this screen if no API key available?)
   - [ ] `/logout`
   - [ ] etc
 - [ ] Contact editing
  - [ ] Add contact
   - [ ] Verify contact number
  - [ ] Remove contact with confirmation
- [ ] Phone number editing
  - [ ] Add phone number
   - [ ] Verify phone number as available
  - [ ] Remove phone number with confirmation
 - [ ] Settings editing
  - [ ] Test API key
  - [ ] Save API key
- [ ] New message handling
  - [ ] Scroll to bottom
  - [ ] Animate new message
  - [ ] Incoming message toast for contact if if user not on ``/contact/:id/messages/(:messageId)``
 - [ ] Auth with cognito
 - [ ] Connect to AppSync API
 - [ ] Style / theme
  - [ ] Set up theming
  - [ ] User can select a theme
  - [ ] Create default theme
