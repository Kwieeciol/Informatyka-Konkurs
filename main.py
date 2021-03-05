from http.client import HTTPSConnection 
from sys import stderr 
from time import sleep 
import json
import os
 
header_data = { 
    "content-type": "application/json", 
    "user-agent": "discordapp.com", 
    "authorization": os.environ["DISCORD_TOKEN"], 
    "host": "discordapp.com", 
    "referer": "TheChannelUrlhere" 
}
 
def get_connection(): 
    return HTTPSConnection("discordapp.com", 443)


def send_message(conn, channels): # You can also use kwargs
    for channel_id, message_data in channels.items():
        try: 
            conn.request("POST", f"/api/v6/channels/{channel_id}/messages", message_data, header_data) 
            resp = conn.getresponse() 
         
            if 199 < resp.status < 300: 
                print("Message sent...") 
               
            else: 
                stderr.write(f"Received HTTP {resp.status}: {resp.reason}\n")  
 
        except: 
            stderr.write("Failed to send_message\n")


def main():
    data = {
        "770992341586280518": json.dumps({"content": "message for channel 1", "tts": "false"}),
        "770992341586280518": json.dumps({"content": "message for channel 2", "tts": "false"}),
        "770992341586280518": json.dumps({"content": "message for channel 3", "tts": "false"})
    }

    send_message(get_connection(), data)


main()