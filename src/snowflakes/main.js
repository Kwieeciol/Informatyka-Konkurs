const SNOWFLAKE_EPOCH = 1420070400000

function time_snowflake(datetime_obj=new Date(), high=false) {
    let unix_seconds = (datetime_obj - new datetime_obj.constructor(1970, 1, 1));
    let millis = unix_seconds * 1000 - SNOWFLAKE_EPOCH;

    return (millis << 22) + (high ? 2 * 22 - 1 : 0);
}

function snowflake_time(id) {
    return new Date(((id >> 22) + SNOWFLAKE_EPOCH));
}

let id = time_snowflake();
console.log(snowflake_time(id))