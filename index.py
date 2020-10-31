from notion.client import NotionClient
from notion.block import TodoBlock
from notion.block import PageBlock
# Obtain the `token_v2` value by inspecting your browser cookies on a logged-in (non-guest) session on Notion.so
client = NotionClient(token_v2="067c36f52e9269eb324490f8130257a411f308ca9c95a39ebbd5d4ac83731e5b0149a6f75a221c5bf3783690ed9321939a36dcbbe97f7c77384646f6b99b32fc69a3330559b7af73a21ca7189e9c")

# Replace this URL with the URL of the page you want to edit
page = client.get_block("https://www.notion.so/notion-api-test-701f2de12a054c82a0f26026e30577bf")

print("The old title is:", page.title)

# Note: You can use Markdown! We convert on-the-fly to Notion's internal formatted text data structure.

page.title = "The title has now changed, and has *live-updated* in the browser!"

print(page.children.add_new(PageBlock, title='2020.01.11'))
print(page.children.add_new(PageBlock, title='2020.01.12'))
print(page.children.add_new(PageBlock, title='2020.01.13'))
print(page.children.add_new(PageBlock, title='2020.01.14'))
print(page.children.add_new(PageBlock, title='2020.01.15'))

for child in page.children :
    child_page = client.get_block(child.id)
    child_page.children.add_new(TodoBlock, title="09:00 아아벤티")