# PantoPlot

Finish this app and draw a nice picture

## How to

make sure you have `node` installed. 

run `npm install` to download all dependencies. Once done run `npm run dev` to build the project. Then visit http://127.0.0.1:5173/panto-plot/ to try out your app

To start click on the "Select DualPanto" button, select the serial device that represents your DualPanto, confirm your selection and click on "Start Communication with DualPanto"


## your task

Open the file `src/HandlePantoMessage` and look for TODO BIS. Your task is to implement the message handling so your panto draw works.


## bored?

Here are some more ideas if you want to dig deeper...

1. increase / decrease the brush size using the endcoders on the handles
2. restyle the webapp. Check out the documentation for the ui library [here](https://mui.com/material-ui/all-components/) 
3. implement physics walls that prevent you panto handles from leaving the drawing board
4. come up with a cool usecase for the second handle... maybe a 2 player drawing tool?
5. still there? Why not use this webstack to build a game?

## troubleshooting

The Web Serial API (https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API) is right now (June 2026) only supported on chromium based browsers and recent firefox versions (starting May 2026).

We strongly recommend using google chrome or chromium for testing as we did not test on any other platform.

You can check support for your browser [here](https://caniuse.com/web-serial)

So far, this project has been tested under node v20, v22, and v24 on windows 10, 11, ubuntu 22 and macos (ARM). If you have any issues please reach out to your TAs through moodle.
