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
 - [ ] Mock up API hooks with SWR
   - [x] Mock GraphQL back-end queries:
     - [x] replace all hard coded mock data with data from mock back-end:
       - [x] User info (name, selected phone number ...)
       - [x] Available numbers in `ChooseYourNumber`
       - [x] Available contacts in `ContactList`
       - [x] Messages related to a particular contact/phone number in `MessageList`
    - [ ] create TS types for API types (or generate them?)
    - [ ] Mock GraphQL mutations:
      - [ ] CUD 
      - [ ] CUD numbers
      - [ ] CUD contacts
      - [ ] SendMessage
      - [ ] Update settings (e.g. add API Key)
    - [ ] Mock GraphQL subscriptions:
      - [ ] New message from contact
 - [ ] Set up routes
   - [ ] `/contact/:id/messages/(:messageId)`
   - [ ] `/contact/:id/edit`
   - [ ] `/chooseyourphonenumber`
   - [ ] `/chooseyourphonenumber/:phonenumber/edit`
   - [ ] `/settings `
     - [ ] (default to this screen if no API key available?)
   - [ ] `/logout`
 - [ ] Integrate API hooks:
   - [ ] create data containers for UI components and add hooks to them
   - [ ] Update props for UI components to accept data from data containers
 - [ ] Contact editing UI
   - [ ] Add contact
     - [ ] Verify contact number
   - [ ] Remove contact with confirmation
- [ ] Phone number editing UI
   - [ ] Add phone number
     - [ ] Verify phone number as available
   - [ ] Remove phone number with confirmation
 - [ ] Settings editing UI
   - [ ] Test API key
   - [ ] Save API key
- [ ] New message handling
   - [ ] Scroll to bottom
   - [ ] Animate new message
   - [ ] Incoming message toast for contact if user not on ``/contact/:id/messages/(:messageId)``
 - [ ] Auth with cognito
   - [ ] Add private routes
 - [ ] Connect to AppSync API
 - [ ] Style / theme
   - [ ] Set up theming with emotion-theming?
   - [ ] Create default theme
   - [ ] User can select a theme

