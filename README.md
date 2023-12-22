# Moonshot Rails

A collection of Stimulus controllers and other helpers enabling faster building of SaaS applications using modern Rails and Stimulus. Most of these are heavily opinionated.

1. [Post Hog Analytics Stimulusjs wrapper](#1-post-hog-analytics-stimulusjs-wrapper)
2. [Shepherdjs Stimulusjs wrapper](#2-shepherdjs-stimulusjs-wrapper)
3. [Crisp Chat Stimulusjs wrapper](#3-crisp-chat-stimulusjs-wrapper)

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

  import { PostHogController } from 'moonshot-rails'
  application.register('post-hog', PostHogController)

  # see the full list at https://github.com/cionescu/moonshot-rails/blob/main/app/assets/javascripts/moonshot/index.js
```

## Contents

### 1. Post Hog Analytics Stimulusjs wrapper

I tend to use [PostHog](https://posthog.com/) for session tracking and product usage analytics.

#### Usage:

In your layout file, add the following:

```erb
  = post_hog_tracker user: @user, enabled: Rails.env.production?, api_key: Settings.post_hog.api_key
```

Your `User` model needs to implement the following methods:
* `id` - used to uniquely identify the user. I usually use the `id` column.
* `tracker_name` - the display name for the user object. Could be `User#full_name`.
* `tracker_email` - another way to identify the user.

### 2. Shepherdjs Stimulusjs wrapper

*TODO*

### 3. Crisp Chat Stimulusjs wrapper

[Crisp](https://crisp.chat/) is one of the options for a live chat/support widget. I tend to like to like it because it comes with an npm package, meaning I can wrap it in a Stimulus controller.

In the layout file, add the following:

```erb
  = crisp_chat user: current_user, enabled: Rails.env.production?, wrapper: :div, api_key: Settings.crisp.api_key
```

If you want to activate (open) the chat widget when clicking a link on the page, you can follow this pattern:

```erb
  You can reach out to us via the
  = crisp_chat(user: current_user, enabled: Rails.env.production?, wrapper: :span, api_key: Settings.crisp.api_key) do
    = link_to 'in-app chat', '#', data: { action: 'click->crisp#open' }, class: 'btn-link text-primary'
```

Similarly to the PostHog wrapper, the `User` model needs to implement the following methods:
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
