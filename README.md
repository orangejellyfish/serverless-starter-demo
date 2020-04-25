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

The following image shows the output of [webpack-bundle-analyzer][wba] for each
bundle:

![desc](https://uc50561ec376104290070a4a7dc7.previews.dropboxusercontent.com/p/thumb/AAyDSWD4k3q1H-0XGc144iziguvk42guW2Ve40LUFSxW1FaDf94kOwAWyhHkiKwAOFqqw_FQwkPNNuVo3eefiv_dDqqOtJg_YU9arih9vOde98ToTACVdujgDt7otQ7cL1alit-GGvOurb3VWXC1vDp7jwbXYqdvqblsfmnfvZgTlus33bSTCvcZ5buiE2_cxeUqtp7rz64eLcntXARm3fdhMZzkTKS7AfA5H4J24Srxy7xx0Xl9eKCdo0tMhllKOoDRxIEfXqPwlDfYiPUaXACSxyHQk7D8GyF9YRzo9US9gJa8fTzzk0KucXYRvCCEs8UwxUhpChhS9TCx86Wkw_c2Q_bxpOWQlb_s4vJBLSjuwFptx2qW9CwsAOHQUFHlrXwKfP9E-pcF5EFzRUBIGkmm/p.png?fv_content=true&size_mode=5)

[ss]: http://github.com/orangejellyfish/serverless-starter
[iq]: https://www.npmjs.com/package/inspirational-quotes
[dp]: https://www.npmjs.com/package/devpun
[wba]: https://www.npmjs.com/package/webpack-bundle-analyzer
