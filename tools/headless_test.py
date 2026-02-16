from playwright.sync_api import sync_playwright

URL = 'http://localhost:8888/course-a1.html'
OUTPUT_SHOT = 'tools/modal_test.png'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto(URL, timeout=30000)
    # Click the Apply Physical button
    page.click("text=Apply Physical")
    # Wait for modal
    page.wait_for_selector('#rules-modal', timeout=5000)
    title = page.text_content('#rules-modal-title')
    checkbox_label = page.text_content('#rules-modal label span')
    content = page.text_content('#rules-content')
    page.screenshot(path=OUTPUT_SHOT, full_page=False)
    print('MODAL_TITLE:', title)
    print('CHECKBOX_LABEL:', checkbox_label)
    print('CONTENT_START:', content[:200].replace('\n',' '))
    browser.close()
