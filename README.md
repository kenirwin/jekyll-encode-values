# JSON Value Encoder

Tool for obfuscating JSON values with base64 encoding. Rather than encoding the whole file, it encodes each individual value, while leaving the keys human-readable.

`{"title": "JSON Value Encoder" }` gets converted to:

```
{
  "title": "SlNPTiBWYWx1ZSBFbmNvZGVy",
  "obfuscated": true
}
```

The converter can also decode similarly-formated values. Although currently set for base64 encoding, it could easily be converted to support other encode/encrypt schemes

## Use Case

Why would you want to do this? I developed it for a very particular situation: keeping semi-secret information is a data file in a public-repo Jekyll site. This allows the Jekyll site to read the data in its original JSON structure (e.g. `site.data.title`) but to keep the data obfuscated in the repo. (The actual use case was information about award-winners yet-to-be announced, but I suppose it could also be useful for things like trivia or quiz answers.)

To decode the information in Jekyll, you'll need a custom plugin. See the `jekyll-demo` folder in this repo for a sample of how to set that up.
