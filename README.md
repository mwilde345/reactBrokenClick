# reactBrokenClick
testing a broken click handler.

Related to: https://stackoverflow.com/questions/53643198/react-synthetic-event-strange-behavior
```
clone https://github.com/mwilde345/reactBrokenClick;
cd reactBrokenClick;
npm install;
npm start;
```

Click on a node and view the console output.
Take a look at the click handler in App.js to see what is breaking.

As far as I can tell it must be something to do with this library. Need to research more. I was hoping someone would confirm that 
this is not a normal issue.

### Update: Fixed in https://github.com/bkrem/react-d3-tree/commit/90feb50f80e154f64479ea9ba0b907422f7e6e1f#diff-954cf8e24c9adf4ef6a92ba0a3f1eb33R328
