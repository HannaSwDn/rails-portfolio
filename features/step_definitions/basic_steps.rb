Given("I visit the site") do
    visit root_path
end

Given("I click on {string}") do |string|
    find(".#{string}").click
end

Given("I fill in {string} field with {string}") do |field, content|
    fill_in field, with: content
end

Given("I send away the message") do
    find('.send').click
end

Given('I click on link {string}') do |string|
    click_on string
end

Given("show me the page") do
    save_and_open_page
end

Given("I am logged in as Admin") do
    visit new_admin_session_path
    fill_in 'Email', with: 'admin@mail.com'
    fill_in 'Password', with: 'password'
    find('#login').click
end
