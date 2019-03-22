Feature: Visitor can send message to admin

    As a Visitor
    In order to contact the admin in a simple way
    I would like to be able to send messages from the website

    Scenario: Visitor can successfully send a message
        Given I visit the site
        Then show me the page
        And I click on 'contact'
        And I fill in the contact form
        And I click on 'Send message'
        Then I should see 'Your message has been sent!'
        And I should see 'I will get back to you as soon as possible.'
