The debugOnly debugOnly Package for Meteor
==========================================

The debugOnly package is a debugOnly package that tells you if you are in debugOnly mode. It drops a `debugOnly` variable on the client and server that returns true. 

How to Use
==========

First, add the package to your application:

	meteor add msavin:debugonly

Then, wrap whatever code you want through a debugOnly check:

```javascript
if (debugOnly) {
	// unleash the hacks!!
}
```

Licensed under MIT license, brought to you by Meteor Toys.