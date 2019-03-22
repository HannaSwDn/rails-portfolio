Given("the following admin exists") do |table|
    table.hashes.each do |admin|
		FactoryBot.create(:admin, admin)
	end
end

Given("the following message exists") do |table|
    table.hashes.each do |message|
		FactoryBot.create(:message, message)
	end
end
