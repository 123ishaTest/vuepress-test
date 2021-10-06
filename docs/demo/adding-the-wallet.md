---
title: Adding the IgtWallet
---
# Adding the IgtWallet
The [Wallet](../docs/features/wallet.md) is a very useful Feature that allows us to store and track Currencies.
Our game of course revolves around bananas, so that's what we're going to use.

## Create a new CurrencyType
First we need to add a new file `src/my-game/features/wallet/CurrencyType.ts`.
This allows us to refer to our currency easily

@[code{17-19} diff](patches/2.1-create-currencies.patch)

:::tip
It is of course up to you where you like to store your game logic, but I suggest mimicking the igt-library structure for clarity
:::

## Update the MyFeatures interface
Now we need to add it to the `MyFeatures` interface. This interface allows the game to know which features are available in your game.
We will use this later when features depend on each other.
@[code{12-21} diff](patches/2.2-add-wallet-to-myfeatures.patch)

## Pass the wallet to the Game
And finally we need to create an instance of the `IgtWallet` and inject it into our `Game`.
The wallet takes as argument a list of currencies it accepts, so we want to pass the `CurrencyType.banana`.
@[code{12-29} diff](patches/2.3-add-wallet-to-app.patch)


:::warning
When building a larger game, it is highly recommended to always extend the features and add those to your App and MyFeatures.
This makes it much easier to add custom functionality later.
:::

## Creating a UI
The `igt-vue` repository comes with a bunch of useful Vue components that work with `IgtFeature`s.
We will use the `src/components/features/igt-wallet.vue` component to render the amount of bananas we have.
We need to add a computed which grabs the amount from the wallet, and render that.
@[code{12-39} diff](patches/2.4-update-wallet-component.patch)

And finally we need to include it in the `App.vue` to make sure it is actually used.
Our game will be fairly simple, so let's create a "Main Screen" that contains the `<igt-wallet>` for now.
@[code{12-38} diff](patches/2.5-add-component-to-app.patch)

If we now open our game in the browser we should see a message that says "I have 0 bananas".

Great we can track currencies, now let's earn some bananas!
