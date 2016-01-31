# internet-speed

> track and visualize your internet speed

inspired by https://www.reddit.com/r/technology/comments/43fi39/i_set_up_my_raspberry_pi_to_automatically_tweet/

## usage

1. create a config.json file in your root directory

eg.

```json
{
  "MONGO_USER": "foo",
  "MONGO_PASS": "bar",
  "MONGO_URL": "candidate.1.mongolayer.com:10606",
  "MONGO_URL2": "candidate.2.mongolayer.com:10660",
  "MONGO_DB": "internet-speed",
  "SPEEDTESTNET_SERVER_ID": 1783
}
```

2. start the server

```sh
npm start
```