# Auto-Speedtest

![Internet download speed](https://user-images.githubusercontent.com/1811109/42627008-0fa83e00-85cc-11e8-9949-7eadc63fe677.png)

Automated Speedtest.net script that publish its results on logz.io

## Requirements

- Docker installed
- A logz.io account

## How to use

```bash
docker run -e LOGZIO_TOKEN=<<YOUR-TOKEN>> satblip/auto-speedtest
```

## Options

Optional parameters can be passed through environment variables

- `THROTTLING` is the value in ms of the interval between the tests (default: 60 minutes)
- `LOGZIO_TYPE` is the the value of `type` in the logs that are pushed to logz.io (default: speedtest)
- `LOGZIO_HOST` is the host where the results are pushed (default: listener.logz.io)

