import os

# Import WebClient from Python SDK (github.com/slackapi/python-slack-sdk)
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError

# WebClient insantiates a client that can call API methods
# When using Bolt, you can use either `app.client` or the `client` passed to listeners.
client = WebClient(os.environ["SLACK_BOT_TOKEN"])
# The name of the file you're going to upload
file_name = "../android/app/build/outputs/apk/release/app-release.apk"
# ID of channel that you want to upload file to
channel_id = os.environ["CONVERSATION_ID"]

try:
    # Call the files.upload method using the WebClient
    # Uploading files requires the `files:write` scope
    result = client.files_upload(
        channels=channel_id,
        initial_comment="Finalmente deploy do conecta-ensina? Talvez...",
        file=file_name,
    )
    # Log the result
    print(result)

except SlackApiError as e:
    print("Error uploading file: {}".format(e))