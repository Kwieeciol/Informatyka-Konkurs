require "date"

SNOWFLAKE_EPOCH = 1420070400000

def time_snowflake(datetime_obj=DateTime.now(), high=false)
    unix_seconds = ((datetime_obj - datetime_obj.class.new(1970, 1, 1)) * 24 * 60 * 60).to_f
    millis = (unix_seconds * 1000 - SNOWFLAKE_EPOCH).to_i

    return (millis << 22) + (high ? 2 * 22 - 1 : 0)
end


def snowflake_time(id)
    return Time.at(((id >> 22) + SNOWFLAKE_EPOCH) / 1000)
end


id = time_snowflake()
puts snowflake_time(id)