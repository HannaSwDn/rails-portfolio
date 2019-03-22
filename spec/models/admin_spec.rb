require 'rails_helper'

RSpec.describe Admin, type: :model do
	describe 'DB table' do
    it { is_expected.to have_db_column :email }
    it { is_expected.to have_db_column :encrypted_password }
  end
end
