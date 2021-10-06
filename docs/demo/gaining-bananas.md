---
id: gaining-bananas
title: Gaining Bananas
---
# Gaining Bananas
Let's gain some bananas! We will create a new Feature that generates 1 banana per second.
If you think that is too little, don't worry! We will also add an `Upgrade` that allows us to level up our gains.

Before we get into coding, it is a good idea to think about the dependencies this feature will have.
It will need to depend on the wallet which is responsible for keeping track of how many bananas we have.
This dependency can be injected in the `initialize(features: MyFeatures)` method of a `Feature`, which is what we'll do!

## Create a BananaProducer feature
Make a new file `src/my-game/features/banana-producer/BananaProducer.ts`.
@[code{51-85} ts](patches/3.1-create-banana-producer.patch)

Note that when a game is started, first the constructor is called, then initialize, then update.
If you have attributes that depend on other features, you need to initialize them in the `initialize()`.

::: warning
The syntax `private _wallet: IgtWallet = undefined as unknown as IgtWallet;` is not great.
But it works without needing complicated Dependency Injection tools. If you know a better way, let me know!
:::

Don't forget to add the Feature to our `App` and `MyFeatures.ts`:
@[code{15-32} diff](patches/3.1-create-banana-producer.patch)
@[code{35-44} diff](patches/3.1-create-banana-producer.patch)


If we refresh our browser, we can now see the banana count go up!

The save and load methods are empty for now, but we'll use them later to save our upgrades bought.

## Adding an upgrade


## Saving and Loading
The base class `IgtFeature` we're extending from implements an interface called `Saveable`.
This interface requires us to implement a save and load method with this signature:
```ts
export interface Saveable {
    saveKey: string;
    save(): SaveData;
    load(data: SaveData): void;
}
```
Where `SaveData` is an empty interface we'll be extending.
