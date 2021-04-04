# Devocidy,
Devocidy is a community project for new developers to contribute too. This is an actual website. vist latest version at of [devocidy](https://devocidy.com)

If you want to contribute first fork and clone the next brack then and make changes.
All tasks need to be completed will be under issues. for now

## Contribution Guide
If you'd like to contribute follow these steps.
- clone the repo or fork and clone how ever you choose but remeber to keep your fork synced to the current state of the repo.
- create `<your new branch>` from the `next` branch.
- choose and issues from the issues page or contact use about what you'd like to change/update/fix.
- Once your ready to merge branch make a pull request to merge `<your branch>` into the `next` branch.


## Componets/UI(Reuseable compoents)
Anyone wanting to contribute should do there best to keep thing modular as to make code more dynamic and reusable as possible. After such you would need to make another pull request to update the readme.md and document any custom compoents/object/etc..

Cameron J. -> customs.
#### `<Button>`
The button component is Either a Link or a button if pass an `href` which should be passed like this `link={myhref}`  it will be a like other wise it will be a button. Also children so any text you wrap it in will become a child element. 

#### `<NavTab>`
This is a custom component design mainly for navbars or nested navigation it accepts probs `name, pathname, bool` name is the name of what the text that should appear to the user and `pathname` is the path they should got to. bool is either true or false and will disable the the tab.

#### `<Progress>`
if a page renders twice you can use this while were still in development and don't have a wrapper. it will put a simple loading screen while page fetches data.
#### `<Smooth>`
smooth is only used for navTab and you'll probs never need to use it so don't worry about that to much.

## Contributors
- French Pudding (testing 1, 2, 3)
