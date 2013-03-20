class RemoveBetaTesterFromUsers < ActiveRecord::Migration
  def up
    remove_column :users, :beta_tester
  end

  def down
    add_column :users, :beta_tester, :boolean
  end
end
