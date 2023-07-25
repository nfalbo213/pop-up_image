# Basic Image Pop-Up Plugin

Basic image pop-up plugin using vanilla JavaScript. 

See example [here](https://nfalbo213.github.io/pop-up_image/).

## License

You're free to use and modify this plugin in your project under the terms of the Apache 2.0 license, as long as you include my name.

## Use

To use plugin, follow these steps:

1) Clone, download, or simply copy and paste `imagePopUp.js` and add it as a file to your project.

2) Add `class="pop-up-img"` to the image elements you wish to enlarge in your HTML.

3) Copy and paste the following and add it to the appropriate section of your HTML (it can be added anywhere, but only needs to be added once):

        <div class="pop-up-frame">
            <button class="pop-up-exit-button">
                <span class="cross-one"></span>
                <span class="cross-two"></span>
            </button>
            <img class="zoomed-img" src="">
        </div>

4) Copy and paste the rules in `style.css` to your project's CSS file. (Exclude the `.pop-up-image` rules, and make the nessecary style changes to match your project)

5) Add `imagePopUp.js` as a module in your HTML using:

    `<script type="module" src="./[YOUR PATHWAY HERE]/imagePopUp.js"></script>`

6) Add [Data Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) to the images you wish to enlarge in your HTML. (As written, `imagePopUp.js` uses `data-prod=""`, but this can be changed to suit your project)

7) In `imagePopUp.js`, change and add 'if' statements in `setImage(target)` to include/match the [Data Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) of each image that you changed in Step 4. Then, change the source and alt-text to match your image.

## Questions

Feel free to [reach out](https://nick.falbo.dev/#contact) with any questions! 😁