# karma-sandbox
Sandbox for developing JavaScript projects through Karma, Mocha, Chai and Sinon.


## Getting Started
You only have to install the dependencies set in package.json running the following command:
```
npm install
```

## Usage
This Sandbox is handled by Grunt. Then, you can make Karma watch any change by:
```
grunt karma:watch
```

Also, you can run Karma once by:
```
grunt karma:once
```

For continuous delivery, run:
```
grunt karma:continuous
```

For code coverage, run:
```
grunt karma:coverage
```

Other available commands are:

JS linting. For that, run:
```
grunt jshint
```

## License
MIT
