class CreateReviewRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :review_requests do |t|
      t.string :title
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
