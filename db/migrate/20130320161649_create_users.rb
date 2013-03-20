class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.boolean :beta_tester

      t.timestamps
    end
  end
end
