import datetime

SNOWFLAKE_EPOCH = 1420070400000

def time_snowflake(datetime_obj=datetime.datetime.utcnow(), *, high=False):
    unix_seconds = (datetime_obj - type(datetime_obj)(1970, 1, 1)).total_seconds()
    millis = int(unix_seconds * 1000 - SNOWFLAKE_EPOCH)

    return (millis << 22) + (2 * 22 - 1 if high else 0)


def snowflake_time(id):
    return datetime.datetime.utcfromtimestamp(((id >> 22) + SNOWFLAKE_EPOCH) / 1000)


id = time_snowflake()
print(snowflake_time(id))