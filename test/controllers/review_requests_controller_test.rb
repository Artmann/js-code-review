require 'test_helper'

class ReviewRequestsControllerTest < ActionDispatch::IntegrationTest

  test "should get index" do
    get new_review_request_url
    assert_response :success
  end

end
