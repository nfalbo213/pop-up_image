# Basic Image Pop-Up Plug-in

Basic image pop-up plug-in using vanilla JavaScript. 

See example [here](https://nfalbo213.github.io/pop-up_image/).

## License

You're free to use and modify this plugin in your project under the terms of the Apache 2.0 license.

## Use

To use plugin, follow these steps:

1) Clone, download, or simply copy and paste [imagePopUp.js](https://github.com/nfalbo213/pop-up_image/blob/main/imagePopUp.js) and add it as a file in your project directory

2) Add `class="pop-up-img"` to the image element(s) you wish to enlarge in your HTML

3) Copy and paste the following and add it to the appropriate section of your HTML (it can technically be added anywhere, but only needs to be added once):

```
        <div class="pop-up-frame">
            <button class="pop-up-exit-button" role="button" aria-roledescription="button to exit out of enlarged image">
                <span class="cross-one"></span>
                <span class="cross-two"></span>
            </button>
            <img class="zoomed-img" src="">
        </div>
``` 

4) Add `imagePopUp.js` as a module in your HTML using:

    ```
    <script type="module" src="./[YOUR PATHWAY HERE]/imagePopUp.js"></script>
    ```

5) Copy and paste the rules in `style.css` to your project's CSS file (Exclude the `.pop-up-image` rules, make nessesary changes to `.zoomed-img` `height:` and `width:` rules to match sizing with your image(s), and make any other style changes to match your project)

## Questions, Comments, Additions

Feel free to [reach out](https://nick.falbo.dev/#contact) with any questions, comments, or additions/improvements! 😁