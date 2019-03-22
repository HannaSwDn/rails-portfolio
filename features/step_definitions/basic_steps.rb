Given("I visit the site") do
    visit root_path
end

Given("I click on {string}") do |string|
    find("#{string}").click
end

Given("I fill in the contact form") do
    pending # Write code here that turns the phrase above into concrete actions
end
