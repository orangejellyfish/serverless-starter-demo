# serverless-starter-demo

A simple demo of the orangejellyfish [serverless-starter][ss] project to show
some of the benefits. This service consists of three functions, each exposed via
an API Gateway HTTP endpoint.

- `/hello` is the default Serverless Framework starter function. It echos back
  the Lambda event as JSON. It has no dependencies.
- `/quote` returns a random inspirational quote. It has a dependency on the
  [inspirational-quotes][iq] package from npm.
- `/pun` returns a random software development pun. It has a dependency on the
  [devpun][dp] package from npm.

## Individually packaged functions

By individually packaging Lambda functions we can significantly reduce the
bundle size of each one, simplifying the code deployed to AWS and reducing the
surface area for bugs and vulnerabilities.

You can run `npm run package` to build the bundles locally. This produces a zip
file for each function in the `.serverless` directory. Inspecting the contents
of each zip file allows you to see the contents of the bundle which in this case
should be a single JavaScript file containing only the compiled code and that of
any dependencies imported by that specific function.

[ss]: http://github.com/orangejellyfish/serverless-starter
[iq]: https://www.npmjs.com/package/inspirational-quotes
[dp]: https://www.npmjs.com/package/devpun
