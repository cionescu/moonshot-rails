# Moonshot Rails

A collection of Stimulus controllers and other helpers enabling faster building of SaaS applications using modern Rails and Stimulus. Most of these are heavily opinionated.

1. Post Hog Analytics Stimulusjs wrapper
2. Shepherdjs Stimulusjs wrapper

## Installation

```bash
  bundle add moonshot-rails
  yarn add moonshot-rails

```

### Include all the stimulus controllers

```bash
  # append this to `app/javascript/controllers/index.js`

  import { registerControllers } from 'moonshot-rails'
  registerControllers(application)
```

### You can also pick and choose which controllers to include

```bash
  # append this to `app/javascript/controllers/index.js`

  import { ShepherdController } from 'moonshot-rails'
  application.register('shepherd', ShepherdController)

  import { PostHogController } from 'moonshot-rails'
  application.register('post-hog', PostHogController)
```

## Contents

### 1. Post Hog Analytics Stimulusjs wrapper

I tend to use [PostHog](https://posthog.com/) for session tracking and product usage analytics.

#### Usage:

In your layout file, add the following:

```erb
  <%= post_hog_tracker user: @user, enabled: Rails.env.production?, api_key: Settings.post_hog.api_key %>
```

Your `User` model needs to implement the following methods:
* `id` - used to uniquely identify the user. I usually use the `id` column.
* `tracker_name` - the display name for the user object. Could be `User#full_name`.
* `tracker_email` - another way to identify the user.

## Release

### Ruby Gem

```bash
  rake release
```

### JavaScript Package

```bash
  npm run release
```
