# kws-cli

Kws3 CLI to bootstrap application templates, and generate application specific files


Install
-----
```bash
> npm install -g @kws3/kws-cli
```

Run
---
```bash
> kws-cli
```
And follow the prompts

----

If you know the answers for followup questions.. you can actually type it with the command.
For example:
```bash
> kws-cli scaffold
# this will not ask you the first question,
# and behave as if you have selected "scaffold" option

> kws-cli scaffold api
# this will not ask you the second question,
# and behave as if you have selected "api" option

> kws-cli scaffold api git
# this will not ask you the third question,
# and behave as if you have selected "git" option
```