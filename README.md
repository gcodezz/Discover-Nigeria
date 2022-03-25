# Discover Nigeria

# App Details
 Discover Nigeria via the language, food and music.

The app will consist of:

    └──Culture Screen

    └──Culture list Screen

    └──Food list Screen

    └──Food details Screen

    └──Artists Screen

    └──Playlist Screen

    └──Year Screen

    └──Edit Product Screen

    └──Drawer



# Stack

React Native
TypeScript
Expo


# Top-level directory layout

    📦Discover-Nigeria
        📦assets
            📦fonts
                ┣ 📜Karla-Bold.ttf
                ┣ 📜Karla-Light.ttf
                ┣ 📜Karla-Medium.ttf
                ┗ 📜Karla-Regular.ttf
            📦images
                ┣ 📜Karla-Bold.ttf
                ┣ 📜Karla-Light.ttf
                ┣ 📜Karla-Medium.ttf
                ┗ 📜Karla-Regular.ttf
            📦music
                ┗ 📜test.m4a
            ┣ 📜icon.png
            ┗ 📜splash.png
        📦components
            ┣ 📦Context
                ┗ 📜Context.ts
            ┣ 📦Food
                ┗ 📜FoodGridTile.tsx
            ┗ 📦UI
                ┣ 📜GridTile.tsx
                ┗ 📜Logo.tsx
        📦constants
            ┗ 📜Colors.ts
        📦data
            ┣ 📜culture.ts
            ┣ 📜foods.ts
            ┗ 📜music.ts
        📦navigation
            ┗ 📜ShopAppNavigation.ts
        📦screens
            ┣ 📦Culture
                ┣ 📜CultureDetailsScreen.js
                ┗ 📜CultureListScreen.js
            ┣ 📦Food
                ┣ 📜FoodDetailsScreen.js
                ┗ 📜FoodListScreen.js
            ┣ 📦General
                ┗ 📜DrawerContent.js
            ┗ 📦Music
                ┣ 📜ArtistsScreen.tsx
                ┣ 📜PlaylistsScreen.tsx
                ┗ 📜YearsScreen.tsx
        📦themes
            ┗ 📜themes.ts
        📦types
            ┣ 📜navigations.ts
            ┗ 📜props.ts
        ┣ 📜App.tsx
        ┣ 📜app.json
        ┣ 📜babel.config.js
        ┣ 📜package-lock.json
        ┣ 📜package.json
        ┣ 📜README.md
        ┗ 📜yarn.lock


# Few Screenshots of screens in light and dark modes
<img src="assets/images/IMG_4733.PNG" width="250" height="500"> <img src="assets/images/IMG_4735.PNG" width="250" height="500"> 
<img src="assets/images/IMG_4734.PNG" width="250" height="500">
<img src="assets/images/IMG_4736.PNG" width="250" height="500">

# How to setup project and run locally

### Clone the repository 

```
git clone https://github.com/gcodezz/Discover-Nigeria.git

```

### Install npm dependencies

```
npm install
```

### Install Expo package
```
expo install
```

### Start the react native bundler to test project on your device

Using expo

```
expo start
```
