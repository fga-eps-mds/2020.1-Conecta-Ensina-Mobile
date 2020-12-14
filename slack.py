import os

# Import WebClient from Python SDK (github.com/slackapi/python-slack-sdk)
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError

# WebClient insantiates a client that can call API methods
# When using Bolt, you can use either `app.client` or the `client` passed to listeners.

client = WebClient(os.environ["SLACK_BOT_TOKEN"])

# The name of the file you're going to upload
# file_name = "android/app/build/outputs/apk/release/app-release.apk"
# ID of channel that you want to upload file to

channel_id = os.environ["CONVERSATION_ID"]

try:
    # Log the result
    result = client.chat_postMessage(
        channel=channel_id, 
        text="Finalmente deploy do conecta-ensina?\n Link: https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Mobile/releases"
    )
    # print(result)

except SlackApiError as e:
    print("Error uploading file: {}".format(e))