# My Message Generator

This is a small command line program I built for Codecademy's Full-Stack Engineer path. Every time you run it, you get a random "Daily Dev Fortune" for coders.

## What it does

Each fortune is made of three random pieces:

Your coding sign
Today's forecast
A piece of advice

All the options are stored as arrays inside one object. The program loops through that object with a `for...in` loop, picks a random item from each array, and uses a `switch` to format each line. Then it prints the whole thing with a little ASCII crystal ball at the bottom.

## How to run it

You need Node installed.

```
git clone https://github.com/ktforge/my_message_generator.git
cd my_message_generator
node script.js
```

## Example output

```
--- Your Daily Dev Fortune ---
Your coding sign is the Stack Overflow Scholar.

Today's forecast: a new concept will finally click.

You should: "explain it to a rubber duck"
   .---.
  ( o o )
   `---`
```

Run it again and you'll get a different one.

## What I learned

The first time I ran it, Node said it couldn't find `script.js`. I had opened the file in VS Code but never saved it, so it didn't actually exist yet. Now I have Auto Save on.

I did my work on a separate branch and merged it into main at the end. My first merge failed because I typed `feature/messages` when the branch was actually named `feature/message`. I also learned you have to check out the branch you want to merge into first, since merge pulls the other branch into whatever branch you're on.

My first push failed with "Repository not found" because I hadn't created the repo on GitHub yet. Adding a remote just saves the address, it doesn't make the repo.

I also got clearer on a few JavaScript things: `for...in` loops over an object's keys, `for...of` only works on things like arrays, and you use brackets like `messageParts[part]` to look up a value by a key stored in a variable.

Built by DeVante Bush
