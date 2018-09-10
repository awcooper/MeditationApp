class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.integer :streak
      t.integer :total_sessions

      t.timestamps
    end
  end
end
