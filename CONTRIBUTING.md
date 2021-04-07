# Contributing to Transcriptase

We deeply value your time and willingness to contribute! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a PR
- Proposing new features
- Becoming a maintainer

## We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)) If you'r thinking of opening a PR we reccomend submitting an issue first to discuss issues and proposals before taking the time to make change. We actively welcome your pull requests:

1. Fork the repo and create your branch from `next`.
2. If you've added code that should be tested, add tests.
3. If you've added new features, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## We Use Module Path Aliases

Look at [Next.js Documention](https://nextjs.org/docs/advanced-features/module-path-aliases) and the `jsconfig.js` file for further instuctions on absolute imports and module path aliases. Please keep this in mind if you need to add imports to make changes.

To add a new alias go to `jsconfig.json`
```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"],
      "@/models/*": ["models/*"],
      "@/pages/*": ["pages/*"],
      // ...etc
      
      // for example following the format
      // "@/<folder>/*": ["<path to folder>/*"]
      // add
      "@/customButtons/*": ["components/customButtons/*"]
    }
  }
}
```
then import
```js
import myCustomButton from '@/customButtons/myCustomButton'
```

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issues](https://github.com/briandk/transcriptase-atom/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can. [My stackoverflow question](http://stackoverflow.com/q/12488905/180626) includes sample code that _anyone_ with a base R setup can run to reproduce what I was seeing
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People _love_ thorough bug reports. I'm not even kidding.

## Use a Consistent Coding Style

We use prittier and at the moment is non-customized so before making any submissions use prittier's default configuration.

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)
